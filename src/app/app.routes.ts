import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';




const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    // Navegacion entre paginas con codigos
    { path: 'heroe/:codigo', component: HeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }, // para mostrar la pagina por defecto
];

@NgModule({
    // imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
