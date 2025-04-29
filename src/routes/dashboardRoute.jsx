import React from 'react'
import { Route, Router, BrowserRouter } from 'react-router-dom'
import ReportPage from '@/pages/report';

export const dashboardRoute = () => {
  return (
    <div>
         <ReportPage/>
    </div>
  );
};
export default dashboardRoute;
