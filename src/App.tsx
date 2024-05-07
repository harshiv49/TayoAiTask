import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import { Contact } from "./components/Contact";
import Charts from "./components/Charts";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { useState } from "react";
import ContactEditForm from "./components/ContactFormEdit";


function App() {
  const [isSideBarOpen,setIsSideBarOpen]=useState(false);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className=" h-screen">
          <AppBar setIsSideBarOpen={setIsSideBarOpen}/>
          <Routes>
            <Route path="/" element={<Contact isSideBarOpen={isSideBarOpen}/>} />
            <Route path="/charts" element={<Charts isSideBarOpen={isSideBarOpen}/>} />
            <Route path="/contact/:id/edit" element={<ContactEditForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
