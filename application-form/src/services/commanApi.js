import axios from "axios";

const headers = {
  contentType: "application/json",
};

export const saveData = async (data) => {
  try {
    await axios.post("http/localhost:5000/applicationForm", data, headers);
  } catch (error) {
    console.log(error);
  }
};

export const saveDraft = async (data) => {
  try {
    await axios.post(
      "http/localhost:5000/applicationForm/draft",
      data,
      headers
    );
  } catch (error) {
    console.log(error);
  }
};
