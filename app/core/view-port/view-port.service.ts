import {Inject, Injectable} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {IConfig} from "./view-port.directive";

export type ViewPortType = 'small' | 'medium' | 'large';

@Injectable()
export class ViewPortService {
  public media$: ReplaySubject<ViewPortType> = new ReplaySubject<ViewPortType>(1);

  constructor(@Inject('IConfig') private config: IConfig) {
    window.onresize = this.viewPortDetect.bind(this);
    window.onload = this.viewPortDetect.bind(this);
  }

  private viewPortDetect() {
    const type = this.getViewPort();
    this.media$.next(type);
  }

  private getViewPort(): ViewPortType {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < this.config.medium) { return 'small'  }
    if (this.config.medium <= viewportWidth && viewportWidth < this.config.large) { return 'medium'  }

    return 'large';
  }
}
