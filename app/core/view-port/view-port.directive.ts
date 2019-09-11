import {Directive, Inject, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ViewPortService, ViewPortType} from "./view-port.service";

export interface IConfig {
  medium: number;
  large: number;
}

@Directive({
  selector: '[ifViewportSize]'
})
export class ViewPortDirective implements OnDestroy {
  private subscription = new Subscription();
  public lastViewPort: ViewPortType;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private viewPortService: ViewPortService) {
  }

  @Input() set ifViewportSize(viewPort: ViewPortType) {
    this.subscription = this.viewPortService.media$.subscribe(value => {
      if (this.lastViewPort === value){ return }

      if (value === viewPort) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }

      this.lastViewPort = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
