import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  posts = [ {
  title: 'Mon premier post',
  content: 'Paris, capitale de la France, est une grande ville européenne et un centre mondial de lart, de la mode, de la gastronomie et de la culture',
    loveIts: 0,
  created_at: Date
},
{
title: 'Mon deuxième post',
content: 'Italie, pays européen bordé par la Méditerranée et lAdriatique, a laissé une forte empreinte sur la culture et la cuisine occidentales. Sa capitale, Rome, abrite le Vatican ainsi que des trésors artistiques et des ruines antiques',
  loveIts: 0,
created_at: Date
} ,
{
title: 'Encore un post',
content: 'Espagne est un pays européen situé sur la péninsule ibérique et comprenant 17 régions autonomes à la géographie et aux cultures diverses. Madrid, la capitale, abrite le palais royal et le musée du Prado, où sont exposées les œuvres dartistes européens.',
loveIts: 0,
created_at: Date
} ];

}
