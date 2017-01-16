import { Component, OnInit } from '@angular/core';
import {State} from './chronometre.state';
import { ToastrService } from 'toastr-ng2';
import { ToastConfig } from 'toastr-ng2';
import {Timer} from '../services/app.services.timer';
const toastConfig: ToastConfig = {timeOut: 2000,enableHtml:true,progressBar:true};

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  providers: [Timer, State],
  styleUrls: ['./chronometre.component.css']
})

export class ChronometreComponent implements OnInit {
  private _btnPlay: string = 'Démarrer';
  
  constructor(private _timer: Timer,private _state: State,private toastrService: ToastrService) { }
  ngOnInit() {
  }
  play() {
      this._timer.start();
      this._state.setPlay();
      this._btnPlay = 'Continuer';      
      this.toastrService.success('Lancement du chrono.', 'Chronomètre', toastConfig);  
  }
  stop() {
      this._timer.stop();
      this._state.setStop();
      this.toastrService.info('Pause du chrono.', 'Chronomètre', toastConfig); 
  }
  backward() {
      this._timer.reset();
      this._state.setBackward();
      this._btnPlay = 'Démarrer';
      this.toastrService.warning('Reset du chrono.', 'Chronomètre', toastConfig); 
  }

}
