import Card from "./component/Card";
import style from "./App.module.css"; 


const items = [
  { id: 1, img: "https://avatars.mds.yandex.net/i?id=e6dd0dc68852057612898ca6200f1755fb6f9893-3573951-images-thumbs&n=13" },
  { id: 2, img: "https://i.pinimg.com/736x/98/45/f5/9845f555bf08cf7a699986289271fd6d.jpg?nii=t" },
  { id: 3, img: "https://i.pinimg.com/originals/89/b6/f6/89b6f675828a52e547e8fc76bf417c44.jpg?nii=t" },
  { id: 4, img: "https://i.pinimg.com/474x/3c/36/63/3c366331915755038b8bcd575f0fa5bd.jpg?nii=t"},
  { id: 5, img: "https://img.magnific.com/free-photo/anime-like-illustration-school-girl_23-2151835216.jpg?semt=ais_hybrid&w=740&q=80"},
  { id: 6, img: "https://i.pinimg.com/originals/4a/c0/8c/4ac08ca4c763dd8f4a59534698ee47c2.jpg?nii=t"},
  {id: 7, img: "https://i.pinimg.com/736x/38/f2/4b/38f24b77911b80ebdb290dbf7857eb20.jpg"},
  {id: 8, img: "https://i.pinimg.com/736x/98/04/d6/9804d6b2c26da3075c115e3ac487845d.jpg?nii=t"},
  {id: 9, img: "https://img.magnific.com/free-photo/anime-like-illustration-girl-portrait_23-2151835253.jpg?semt=ais_hybrid&w=740&q=80"},
  {id: 10, img: "https://img.magnific.com/free-photo/anime-like-illustration-school-girl_23-2151835188.jpg?semt=ais_hybrid&w=740&q=80"},
  {id: 11, img: "https://img.magnific.com/free-photo/anime-girl-kimono-amidst-cherry-blossoms_23-2152016665.jpg?semt=ais_hybrid&w=740&q=80"},
]

function Dop() {

  return (
        <div className={style.container}>
          {items.map((item) => (
            <Card key={item.id} img={item.img} />
          ))}
        </div>
  );
}

export default Dop;
