import { Route ,Routes } from "react-router-dom";
import { Inicio } from "../../componets/conetenedor/Inicio";
import { Acerca } from "../../componets/otros/Acerca";
import { NoEncontrado } from "../../componets/conetenedor/NoEncontrado";
import { RegistrarRevistas } from "../../componets/Revistas/RegistrarRevistas";
import { ListarRevistas } from "../../componets/Revistas/ListarRevistas";
import { AdminRevistas } from "../../componets/Revistas/AdminRevistas";



 
export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>
 
            <Route path="/lisRevis" element={<ListarRevistas/>}/>
            <Route path="/RegisRevis" element={<RegistrarRevistas/>}/>
            <Route path="/AdmRevis" element={<AdminRevistas/>}/>
                   
           
 
            <Route path="/acer" element={<Acerca/>}/>
 
            <Route path="*" element={<NoEncontrado/>}/>
 
        </Routes>
    );
};
 