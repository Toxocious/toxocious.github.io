import React from 'react';
import ReactDOM from 'react-dom/client';

import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Nav } from './components/nav';

import { HomePage } from './pages/home';
import { PostsPage } from './pages/posts';
import { ProjectsPage } from './pages/projects';
import { WorksPage } from './pages/works';
import { Http404Page } from './pages/404';

import { Post } from './features/post';
import { Project } from './features/project';
import { Work } from './features/work';

import './animations.scss';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Header />
    <Nav />

    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='/posts' element={<PostsPage />} />
      <Route path='/posts/:id' element={<Post />} />

      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/projects/:id' element={<Project />} />

      <Route path='/works' element={<WorksPage />} />
      <Route path='/works/:id' element={<Work />} />

      <Route path='*' element={<Http404Page />} />
    </Routes>

    <Footer />
  </HashRouter>
);
