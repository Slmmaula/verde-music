import { BrowserRouter, Route, Routes } from 'react-router'
import ComingSoon from './app/ComingSoon'
import NotFound from './app/NotFound'
import HomeScreen from './features/home/HomeScreen'
import LibraryScreen from './features/library/LibraryScreen'
import SearchScreen from './features/search/SearchScreen'
import SettingsScreen from './features/settings/SettingsScreen'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route index element={<HomeScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="library" element={<LibraryScreen />} />
        <Route path="settings" element={<SettingsScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
