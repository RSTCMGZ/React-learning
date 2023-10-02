import React from "react";

// export default function User(props) {
//   return (
//     <div>
//       {/* <h1>
//         {props.isLoggedin
//           ? `${props.name} ${props.surname}`
//           : `Giriş yapmadınız`}
//       </h1> */}
//     </div>
//   );
// }

export default function User(name, surname, age) {
  return (
    <div>
      <h1>{`Benim adım ${name} ${surname} ve ben ${age} yaşındayım`}</h1>
    </div>
  );
}
