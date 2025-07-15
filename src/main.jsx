import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts, { loader as postsLoader } from './routes/Posts.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPost, { action as newPostAction } from './routes/NewPost.jsx'
import Rootlayout from './routes/RootLayout.jsx'
import PostDetails, { loader as getPostDetail } from './routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: '/:id',
            element: <PostDetails/>,
            loader: getPostDetail,
          }
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
