import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateThreadInput from "../components/CreateThreadInput";

function CreateThreadPage() {
  const { authUser = null } = useSelector((states) => states);
  const navigate = useNavigate();
  let timerInterval;

  if (authUser === null) {
    Swal.fire({
      title: "You must sign in to create a thread.",
      icon: "info",
      html: "You will be redirect to <u><a href='/login'>Sign in</a></u> page in <b></b> seconds.",
      timer: 5000,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Math.floor(Swal.getTimerLeft() / 1000) + 1;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        navigate("/login");
      }
    });

    return null;
  }
  return (
    <div className="py-16 text-white">
      <h2 className="text-center text-3xl mb-5">Create New Thread</h2>

      <CreateThreadInput />
    </div>
  );
}

export default CreateThreadPage;
