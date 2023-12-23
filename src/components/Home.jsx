import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/action";

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <img
          src="https://cdn.vectorstock.com/i/preview-1x/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg"
          alt="banner"
          className=" w-3/4 h-96 m-auto "
        />
      </div>
      <div className="grid grid-cols-4  gap-y-60 mx-20 mt-10">
        {data.map((item) => (
          <Card
            sx={{
              maxWidth: "auto",
              margin: "0 32px",
              padding: "0.1em",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt={item.name}
                sx={{ padding: "1em 1em 0 1em" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis rem rerum commodi, nulla praesentium aperiam sint
                  molestiae inventore ullam fugit dicta porro nobis debitis
                  architecto reprehenderit laudantium distinctio libero
                  laboriosam.
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {item.price}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {item.brand}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => dispatch(AddToCart(item))}> BUY NOW</Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;

const data = [
  {
    id: 1,
    name: "sofa",
    color: "brown",
    brand: "Hp",
    image:
      "https://www.shutterstock.com/image-photo/warm-cozy-interior-living-room-600nw-2202283983.jpg",
  },
  {
    id: 2,
    name: "phone",
    color: "black",
    price: 15000,
    brand: "samsung",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a037fzkgins/gallery/in-galaxy-a03s-a037-401442-sm-a037fzkgins-490358748?$650_519_PNG$",
  },
  {
    id: 3,
    name: "dress",
    color: "pink",
    price: 5000,
    brand: "roadstar",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24714524/2023/9/19/4cb20f38-aaff-40e8-b9d2-2f742d786c2c1695123913243-Pure-Acrylic-Women-Sweater-Dress-3991695123912845-1.jpg",
  },
  {
    id: 4,
    name: "watch",
    color: "golden",
    price: 35000,
    brand: "CHENXI",
    image: "https://m.media-amazon.com/images/I/718mlLCWp2L._AC_UY350_.jpg",
  },
  {
    id: 5,
    name: "top",
    color: "purple",
    price: 2000,
    brand: "H & M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCq_w0orY-aZrHmCUUOM6aEPTOoZPpiIrUA&usqp=CAU",
  },
  {
    id: 6,
    name: "pant",
    color: "black",
    price: 4000,
    brand: "H & M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_NZ-W5i7z5QEDL5eVfp3GDFh9X2nKKJEvw&usqp=CAU",
  },
  {
    id: 7,
    name: "earings",
    color: "golden",
    price: 500,
    brand: "Nerya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurm-0JldwfexZZhDQeGBmw3KnHi8i9YyqF4ZzPWXWRgE16pVuPSEcHYT9Bf81CKrCIyg&usqp=CAU",
  },
  {
    id: 8,
    name: "TV",
    color: "black",
    price: 80000,
    brand: "Mi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxo0KyVMw3jNEnxIAzNOcCIiWEm-f4kisb8Y4wi5BCqLA4BVz0D8fMULcL1yfEwyFLbd0&usqp=CAU",
  },
  {
    id: 9,
    name: "sofa",
    color: "brown",
    brand: "Hp",
    image:
      "https://www.shutterstock.com/image-photo/warm-cozy-interior-living-room-600nw-2202283983.jpg",
  },
  {
    id: 10,
    name: "phone",
    color: "black",
    price: 15000,
    brand: "samsung",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a037fzkgins/gallery/in-galaxy-a03s-a037-401442-sm-a037fzkgins-490358748?$650_519_PNG$",
  },
  {
    id: 11,
    name: "dress",
    color: "pink",
    price: 5000,
    brand: "roadstar",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24714524/2023/9/19/4cb20f38-aaff-40e8-b9d2-2f742d786c2c1695123913243-Pure-Acrylic-Women-Sweater-Dress-3991695123912845-1.jpg",
  },
  {
    id: 12,
    name: "watch",
    color: "golden",
    price: 35000,
    brand: "CHENXI",
    image: "https://m.media-amazon.com/images/I/718mlLCWp2L._AC_UY350_.jpg",
  },
  {
    id: 13,
    name: "top",
    color: "purple",
    price: 2000,
    brand: "H & M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCq_w0orY-aZrHmCUUOM6aEPTOoZPpiIrUA&usqp=CAU",
  },
  {
    id: 14,
    name: "pant",
    color: "black",
    price: 4000,
    brand: "H & M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_NZ-W5i7z5QEDL5eVfp3GDFh9X2nKKJEvw&usqp=CAU",
  },
  {
    id: 15,
    name: "earings",
    color: "golden",
    price: 500,
    brand: "Nerya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurm-0JldwfexZZhDQeGBmw3KnHi8i9YyqF4ZzPWXWRgE16pVuPSEcHYT9Bf81CKrCIyg&usqp=CAU",
  },
  {
    id: 16,
    name: "TV",
    color: "black",
    price: 80000,
    brand: "Mi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxo0KyVMw3jNEnxIAzNOcCIiWEm-f4kisb8Y4wi5BCqLA4BVz0D8fMULcL1yfEwyFLbd0&usqp=CAU",
  },
  {
    id: 17,
    name: "sofa",
    color: "brown",
    brand: "Hp",
    image:
      "https://www.shutterstock.com/image-photo/warm-cozy-interior-living-room-600nw-2202283983.jpg",
  },
  {
    id: 18,
    name: "phone",
    color: "black",
    price: 15000,
    brand: "samsung",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a037fzkgins/gallery/in-galaxy-a03s-a037-401442-sm-a037fzkgins-490358748?$650_519_PNG$",
  },
  {
    id: 19,
    name: "dress",
    color: "pink",
    price: 5000,
    brand: "roadstar",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24714524/2023/9/19/4cb20f38-aaff-40e8-b9d2-2f742d786c2c1695123913243-Pure-Acrylic-Women-Sweater-Dress-3991695123912845-1.jpg",
  },
  {
    id: 20,
    name: "watch",
    color: "golden",
    price: 35000,
    brand: "CHENXI",
    image: "https://m.media-amazon.com/images/I/718mlLCWp2L._AC_UY350_.jpg",
  },
  {
    id: 21,
    name: "top",
    color: "purple",
    price: 2000,
    brand: "H & M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCq_w0orY-aZrHmCUUOM6aEPTOoZPpiIrUA&usqp=CAU",
  },
  {
    id: 22,
    name: "pant",
    color: "black",
    price: 4000,
    brand: "H & M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_NZ-W5i7z5QEDL5eVfp3GDFh9X2nKKJEvw&usqp=CAU",
  },
  {
    id: 23,
    name: "earings",
    color: "golden",
    price: 500,
    brand: "Nerya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurm-0JldwfexZZhDQeGBmw3KnHi8i9YyqF4ZzPWXWRgE16pVuPSEcHYT9Bf81CKrCIyg&usqp=CAU",
  },
  {
    id: 24,
    name: "TV",
    color: "black",
    price: 80000,
    brand: "Mi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxo0KyVMw3jNEnxIAzNOcCIiWEm-f4kisb8Y4wi5BCqLA4BVz0D8fMULcL1yfEwyFLbd0&usqp=CAU",
  },
];
