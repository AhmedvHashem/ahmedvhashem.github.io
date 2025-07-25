import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./page.module.css";

const ReviewsModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className={styles.description}>
        <strong
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={openModal}
        >
          Mentee Reviews
        </strong>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Reviews Modal"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            position: "absolute",
            margin: "auto",
            borderRadius: "16px",
            padding: "20px",
            width: "auto",
            maxWidth: "700px",
            height: "700px",
          },
        }}
      >
        <section
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://adplist.org/widgets/reviews?src=ahmed-hashem"
            title="All Reviews"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: "0px", overflow: "hidden" }}
          ></iframe>
        </section>
      </Modal>
    </div>
  );
};

export default ReviewsModal;
