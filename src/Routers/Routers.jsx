import Blog from 'pages/Blog';
import Catalog from 'pages/Catalog';
import Delivery from 'pages/Delivery';
import Detail from 'pages/Detail';
import Home from 'pages/Home';
import Post from 'pages/Post';
import Sales from 'pages/Sales';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:productId' element={<Detail />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:postId' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
