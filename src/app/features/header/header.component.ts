import { Component, OnInit } from '@angular/core';
import { HelperPaths } from '../../shared/classes/helper-paths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  helperPaths = HelperPaths;

  constructor() { }

  ngOnInit(): void {
  }

}
