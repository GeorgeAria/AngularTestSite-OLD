import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TradeShiftComponent } from './trade-shift.component';
import { TradeShiftDayComponent } from './trade-shift-day.component';
import { TradeShiftDayCommentsComponent } from './trade-shift-day-comments.component';
import { ChildCommentsComponent } from './child-comments.component';

@NgModule(
    {
        declarations: 
        [
            TradeShiftComponent,
            TradeShiftDayComponent,
            TradeShiftDayCommentsComponent,
            ChildCommentsComponent
        ],
        imports:
        [
            RouterModule.forChild(
                [
                    { 
                        path: 'tradeShift', component: TradeShiftComponent 
                    },
                    {
                        path: 'tradeShift/:id',component: TradeShiftDayComponent
                    },
                    {
                        path: 'tradeShift/:id/:postID',component: TradeShiftDayCommentsComponent
                    }
                ]),
            SharedModule
        ]
    }
)
export class TradeShiftModule{}