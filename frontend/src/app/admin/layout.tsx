// import { SidebarDemo } from "@/components/Sidebar";
// import React from "react";

// type Props = {};

// const AdminLayout = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   return (
//     <div className="w-fit overflow-hidden">
//       <div className="w-fit flex">
//         <div className="w-fit">
//           <SidebarDemo />
//         </div>
//         <div className="w-fit">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;


import { SidebarDemo } from "@/components/Sidebar";
import React from "react";

type Props = {};

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative flex min-h-screen">
      <div className="fixed z-10 w-fit">
        <SidebarDemo />
      </div>
      <div className="flex-grow ml-[60px]">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
