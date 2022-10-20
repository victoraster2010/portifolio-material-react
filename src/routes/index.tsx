import {Routes, Route, Navigate} from 'react-router-dom';

export const AppRoutes = () => {

  return (
    <Routes>
          <Route path="/" element={<p>Página padrão</p>}/>
          <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
};