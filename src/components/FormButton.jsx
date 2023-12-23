import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { FormData } from "../Redux/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function FormButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [submitdata, setSubmitData] = useState({});
  const formDispatch = useDispatch();
  function handleChange(e) {
    setSubmitData({ ...submitdata, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    () => dispatch(FormData(item));
    console.log(submitdata, "on submit");
  }

  return (
    <div>
      <button
        className="bg-red-400 rounded float-right mx-6 py-2 px-4 text-2xl  "
        onClick={handleOpen}
      >
        Add queries
      </button>
      {/* modal start */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component="form" noValidate autoComplete="off" sx={style}>
            <form>
              <label htmlFor="date">Date : </label>
              <br />
              <input
                type="date"
                id="date"
                name="date"
                onChange={handleChange}
              />
              <br />
              <br />

              <label htmlFor="query_type">Date : </label>
              <br />
              <select name="query_type" id="query_type" onChange={handleChange}>
                <option value="damage">Damage</option>
                <option value="return">Return</option>
                <option value="replace">Replace</option>
              </select>
              <br />
              <br />

              <label htmlFor="product_type">product_typ</label>
              <br />
              <select
                name="product_typ"
                id="product_typ"
                onChange={handleChange}
              >
                <option value="furniture">Furniture</option>
                <option value="mobile">Mobile</option>
                <option value="home_appliences">Home appliences</option>
              </select>
              <br />
              <br />

              <label htmlFor="product_id">Product Id</label>
              <br />
              <input
                type="text"
                id="product_id"
                name="product_id"
                onChange={handleChange}
              />
              <br />
              <br />

              <button onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={handleClose}>Close</button>
          </Box>
        </Modal>
      </div>
      {/* modal end */}
    </div>
  );
}

export default FormButton;
