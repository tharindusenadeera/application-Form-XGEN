import { FC, useState } from "react";
import { PrimaryApplicantDetails } from "./SECTIONS/Personal Details/primaryApplicantDetails";
import { Template } from "./SECTIONS/template";

//utilities
import { v4 as uuidv4 } from "uuid";
import { CustomerContactDetails } from "./SECTIONS/contact details/contactDetails";
import { Stack } from "@mui/material";
import { ButtonComponent } from "../inputComponents/ButtonComponent";
import { AdditionalDetails } from "./SECTIONS/additional details/additionalDetails";

export const ApplicationForm: FC = () => {
  //Personla details state
  const [title, setTitle] = useState("");
  const [initialsInFull, setInitialsInFull] = useState("");
  const [lastName, setlastName] = useState("");
  const [initials, setInitials] = useState("");
  const [others, setOthers] = useState("");
  const [address, setAddress] = useState("");

  //Customer contact details state
  const [customerContacValues, setCustomerContacValues] = useState([
    { type: null, value: "", id: "" },
  ]);
  const [fixedTpNumber, setFixedTpNumber] = useState("");
  const [whatsApp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const onCustomerContacValuesChange = (value: any, type: any, id: any) => {
    let filterd = customerContacValues.map((item) => {
      if (item.id == id) {
        return { type: type, value: value, id: id };
      }
      return item;
    });

    setCustomerContacValues(filterd);
  };
  const onNewCustomerContactFieldAdding = () => {
    const newId = uuidv4();
    setCustomerContacValues((curruntValues) => [
      ...curruntValues,
      { type: null, value: "", id: newId },
    ]);
  };
  const onCustomerContactFieldDelete = (id: any) => {
    setCustomerContacValues(() =>
      customerContacValues.filter((item) => item.id != id)
    );
  };
  const onCustomerContactFieldReset = () =>
    setCustomerContacValues([{ type: null, value: "", id: "" }]);

  //Additional detailsstate
  const [employeed, setEmployeed] = useState(true);
  const [salary, setSalary] = useState("");

  //pannel collapsive state
  const [personalShow, setPersonalShow] = useState(false);
  const onPannelClose = (value: any) => setPersonalShow(value);
  const [contactShow, setContactShow] = useState(false);
  const onConactlClose = (value: any) => setContactShow(value);
  const [additionalShow, setAdditionalShow] = useState(false);
  const onAdditionalClose = (value: any) => setAdditionalShow(value);

  // onSubmit = () =>
  return (
    <>
      {/* //Personnal data */}
      <Template
        title="1. Personal Details"
        Visibility={personalShow}
        setVisibility={onPannelClose}
        noBack
        onNext={() => {
          setPersonalShow(false);
          setContactShow(true);
          window.scrollTo(0, 1000);
        }}
      >
        <PrimaryApplicantDetails
          title={title}
          setTitle={setTitle}
          setInitialsInFull={setInitialsInFull}
          initialsInFull={initialsInFull}
          lastName={lastName}
          setlastName={setlastName}
          initials={initials}
          setInitials={setInitials}
          others={others}
          setOthers={setOthers}
          address={address}
          setAddress={setAddress}
        />
      </Template>

      {/* //Contact details */}
      <Template
        title="2. Contact Details"
        Visibility={contactShow}
        setVisibility={onConactlClose}
        onNext={() => {
          setContactShow(false);
          setAdditionalShow(true);
        }}
        onBack={() => {
          setContactShow(false);
          setPersonalShow(true);
        }}
      >
        <CustomerContactDetails
          customerContacValues={customerContacValues}
          onCustomerContacValuesChange={onCustomerContacValuesChange}
          onNewCustomerContactFieldAdding={onNewCustomerContactFieldAdding}
          onCustomerContactFieldDelete={onCustomerContactFieldDelete}
          onCustomerContactFieldReset={onCustomerContactFieldReset}
          fixedTpNumber={fixedTpNumber}
          setFixedTpNumber={setFixedTpNumber}
          email={email}
          setEmail={setEmail}
          whatsApp={whatsApp}
          setWhatsApp={setWhatsapp}
        />
      </Template>

      {/* //Additional details */}
      <Template
        title="3. Additional Details"
        Visibility={additionalShow}
        setVisibility={onAdditionalClose}
        noNext
        onBack={() => {
          setAdditionalShow(false);
          setContactShow(true);
        }}
      >
        <AdditionalDetails
          employeed={employeed}
          setEmployeed={setEmployeed}
          salary={salary}
          setSalary={setSalary}
        />
      </Template>

      <Stack direction="row" spacing={2} justifyContent="end" p={2}>
        <ButtonComponent title="Save As Draft" variant="outlined" />
        <ButtonComponent title="SUBMIT" variant="contained" />
      </Stack>
    </>
  );
};
