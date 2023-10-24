import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./componentes/login/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./componentes/login/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'tabs/tab1',
    loadChildren: () => import('./tab1/tab1.module').then((m) => m.Tab1PageModule),
  },
  {
    path: 'si',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'deta1',
    loadChildren: () => import('./componentes/detalles/deta1/deta1.module').then( m => m.Deta1Module)
  },
  {
    path: 'compra',
    loadChildren: () => import('./componentes/compra/compra.module').then( m => m.CompraModule)
  },
  {
    path: 'detacompra',
    loadChildren: () => import('./componentes/detacompra/detacompra.module').then( m => m.DetacompraModule)
  },
  {
    path: 'deta2',
    loadChildren: () => import('./componentes/detalles/deta2/deta2.module').then( m => m.Deta2Module)
  },
  {
    path: 'deta3',
    loadChildren: () => import('./componentes/detalles/deta3/deta3.module').then( m => m.Deta3Module)
  },
  {
    path: 'foto',
    loadChildren: () => import('./componentes/foto/foto.module').then( m => m.FotoModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
