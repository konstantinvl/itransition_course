import React, { useEffect } from "react";
// import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
// import Collection from "../components/collection/collection";
// import CollectionPage from "../pages/collectionPage";
// import CreateCollection from "../pages/createCollection";
// import CreateItem from "../pages/createItem";
// import MainPage from "../pages/main";
// import MyCollection from "../pages/userPage";
// import { useAppSelector } from "../services/store/hooks";
// import AuthRouter from "./authRouter";

// export default function MyCOllectionRouter(): JSX.Element {
//   const user = useAppSelector((store) => store.user);

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <>
//             <Outlet />
//           </>
//         }
//       >
//         <Route index element={<MyCollection />} />
//         <Route path="new" element={<CreateCollection />} />
//         <Route
//           path="/:collectionid"
//           element={
//             <>
//               <Outlet />
//             </>
//           }
//         >
//           <Route index element={<CollectionPage />} />
//           <Route path="newItem/:collectionid" element={<CreateItem />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// }
