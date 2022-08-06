import React from 'react';
import ReactDOM from 'react-dom/client';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Nav } from './components/nav';

import { HomePage } from './pages/home';
import { PostsPage } from './pages/posts';
import { ProjectsPage } from './pages/projects';
import { Http404Page } from './pages/404';

import { Post } from './features/post';
import { Project } from './features/project';

import './animations.scss';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Header />
    <Nav />

    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='/posts' element={<PostsPage />} />
      <Route path='/posts/:id' element={<Post />} />

      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/projects/:id' element={<Project />} />

      <Route path='*' element={<Http404Page />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
