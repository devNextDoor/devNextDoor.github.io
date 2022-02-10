import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-scatter-result-sheet',
  templateUrl: './scatter-result-sheet.component.html',
  styleUrls: ['./scatter-result-sheet.component.scss']
})
export class ScatterResultSheetComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { names: string[] },
    private scatterSheetRef: MatBottomSheetRef<ScatterResultSheetComponent>) { }

  ngOnInit(): void {
  }

}
