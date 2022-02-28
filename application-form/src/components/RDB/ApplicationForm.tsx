import { FC, useState } from "react";
import { PrimaryApplicantDetails } from "./SECTIONS/Personal Details/primaryApplicantDetails";
import { Template } from "./SECTIONS/template";

export const ApplicationForm: FC = () => {
  //Personla details state
  const [title, setTitle] = useState("");
  const [initialsInFull, setInitialsInFull] = useState("");
  const [lastName, setlastName] = useState("");
  const [initials, setInitials] = useState("");
  const [others, setOthers] = useState("");
  const [address, setAddress] = useState("");

  //pannel collapsive state
  const [personalShow, setPersonalShow] = useState(false);
  const onPannelClose = (value: any) => setPersonalShow(value);
  const [contactShow, setContactShow] = useState(false);
  const onConactlClose = (value: any) => setContactShow(value);
  const [additionalShow, setAdditionalShow] = useState(false);
  const onAdditionalClose = (value: any) => setAdditionalShow(value);
  return (
    <>
      {/* //Personnal data */}
      <Template
        title="1. Personal Details"
        Visibility={personalShow}
        setVisibility={onPannelClose}
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

      {/* //Additional details */}
      <Template
        title="3. Additional Details"
        Visibility={additionalShow}
        setVisibility={onAdditionalClose}
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
    </>
  );
};
