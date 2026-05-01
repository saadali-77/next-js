









export default function UserLayout({children,user,notification,revenue,login}:{
    children:React.ReactNode
    user:React.ReactNode
    notification:React.ReactNode
    revenue:React.ReactNode
    login:React.ReactNode
}){
    const islogin = true
    return islogin?(
        <div>
            <h1>user layout</h1>
            {children}
            <div style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
                <h2>User Section:</h2>
                {user}
            </div>
            <div style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
                <h2>Notification Section:</h2>
                {notification}
            </div>
            <div style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
                <h2>Revenue Section:</h2>
                {revenue}
            </div>
        </div>
    ):(
        <div>
            {login}
        </div>
    )
}












// export default function DashboardLayout({
//   children,
//   user,
// }: {
//   children: React.ReactNode;
//   user: React.ReactNode;
// }) {
//   return (
//     <div>
//       {children}
//       {user}
//     </div>
//   );
// }
