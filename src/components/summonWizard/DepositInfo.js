import { Field, useFormikContext } from "formik";
import React from "react";

const DepositInfo = () => {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <h3>Deposit Info</h3>
      <h4>
        Members must post a deposit when submitting a proposal, and the
        processing reward goes to the processor. Values are in the currency you selected for your dao. If WETH, for example, proposal deposit would typically be 1 WETH and reward would be 0.1 WETH.  
      </h4>

      <Field name="proposalDeposit">
        {({ field, form }) => (
          <div className={field.value ? "Field HasValue" : "Field "}>
            <label>Proposal Deposit</label>
            <input
              min="0"
              type="number"
              inputMode="decimal"
              step="any"
              {...field}
            />
          </div>
        )}
      </Field>

      <small style={{ color: "red" }}>
        {touched.proposalDeposit && errors.proposalDeposit}
      </small>

      <Field name="processingReward">
        {({ field }) => (
          <div className={field.value ? "Field HasValue" : "Field "}>
            <label>Processing Reward</label>
            <input
              min="0"
              type="number"
              inputMode="decimal"
              step="any"
              {...field}
            />
          </div>
        )}
      </Field>

      <small style={{ color: "red" }}>
        {touched.processingReward && errors.processingReward}
      </small>
    </div>
  );
};

export default DepositInfo;
