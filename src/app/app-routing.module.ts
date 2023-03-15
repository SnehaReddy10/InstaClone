import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'story',
    loadChildren: () =>
      import('./pages/story/story.module').then((m) => m.StoryPageModule),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./pages/messages/messages.module').then(
        (m) => m.MessagesPageModule
      ),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./pages/comments/comments.module').then(
        (m) => m.CommentsPageModule
      ),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./pages/user-profile/user-profile.module').then(
        (m) => m.UserProfilePageModule
      ),
  },
  {
    path: 'message-requests',
    loadChildren: () =>
      import('./pages/message-requests/message-requests.module').then(
        (m) => m.MessageRequestsPageModule
      ),
  },
  {
    path: 'follow-requests',
    loadChildren: () =>
      import('./pages/follow-requests/follow-requests.module').then(
        (m) => m.FollowRequestsPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: 'instagram',
    loadChildren: () =>
      import('./pages/instagram/instagram.module').then(
        (m) => m.InstagramPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
