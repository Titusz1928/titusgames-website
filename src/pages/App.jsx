import { Routes, Route } from 'react-router'
import { HomePage } from './home/HomePage'
import './App.css'
import { NotFoundPage } from './notfound/NotFoundPage'
import { AboutPage } from './about/AboutPage'
import GamesPage from './games/GamesPage'
import GameDetail from './games/GameDetail'
import PrivacyPage from './privacy/PrivacyPage'
import DeleteDataPage from './privacy/deletedata/DeleteDataPage'
import GameUpdatePage from './updates/GameUpdatePage'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/about" index element={<AboutPage />}></Route>
        <Route path="/games" index element={<GamesPage />}></Route>
        <Route path="/game/:gameId" element={<GameDetail />} />
        <Route path="/privacy/:gameId" element={<PrivacyPage />} />
        <Route path="/privacy/:gameId/delete-data" element={<DeleteDataPage />} />
        <Route path="/game/:gameId/update/:updateId" element={<GameUpdatePage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/discord" element={
          <NotFoundPage
            title="Coming Soon!"
            message="We are currently working hard on the this. Check back soon!"
          />
        } />
      </Routes>
    </>
  )
}

export default App
