import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Nome, Content } from "../Views/Main/styles";

function CardItem({ card, onDelete }) {
  return (
    <li key={card.id}>
      <Nome>{card.title}</Nome>
      <Content>{card.content}</Content>
      <IconButton onClick={onDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

CardItem.defaultProps = {
  card: "without card.",
};

CardItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default CardItem;
