import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { profilePage } from './routers';
import { DefaultLayout } from './layouts/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {profilePage.map((route, index) => {
                        let Layout = DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
