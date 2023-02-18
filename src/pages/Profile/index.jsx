import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  console.log(params);
  return <div className=" text-red-600 mt-20">Profile 페이지입니다.</div>;
}
