import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTothali } from "./Slice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const add = (item) => {
    item = JSON.parse(JSON.stringify(item));
    item.quantity = quantity;
    item.totalPrice = Number(item.quantity) * Number(item.price);
    dispatch(addTothali(item));
    console.log(addTothali(item));
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="col-4 mt-3">

      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="200"
          src={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          <Typography size="small" style={{ textAlign:'center' , marginTop:"10px" }}>
            {data.price} ₹
          </Typography>
        </CardContent>

        <CardActions className="position-relative">
          <span className=" position-absolute top-50 start-50 translate-middle">
            <Button size="small" onClick={increment}>
              <AddIcon />
            </Button>
            <span className="position-relative">
              <p
                size="very small"
                className=" position-absolute top-50 start-50 translate-middle"
              >
                {quantity}
              </p>
            </span>
            <Button size="small" onClick={decrement}>
              <RemoveIcon />
            </Button>
          </span>
        </CardActions>
        <CardActions>
          <Button
            size="small"
            style={{ margin: "auto"  }}
            onClick={() => add(data)}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
