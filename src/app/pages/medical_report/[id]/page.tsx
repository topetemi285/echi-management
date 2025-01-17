import { Title } from "@mantine/core";
import React from "react";

function MedicalReport() {
  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <div>
        <div>Image</div>
        <div>Clinics Name</div>
        <div>Address</div>
      </div>

      <div>
        <Title>MEDICAL REPORT</Title>
      </div>

      <div>
        <div>Visit Information</div>
        <div className="grid grid-cols-2 items-center justify-between">
          <div>
            <div>
              <span>Doctors Name:</span> Dr Asalu Peter
            </div>
            <div>
              <span>Specialization:</span>Cardiology{" "}
            </div>
          </div>
          <div>
            <span>Visit Date:</span>14-11-3034
          </div>
        </div>
      </div>

      <div>
        <div>Patient Information</div>
        <div className="grid grid-cols-2 items-center justify-between">
          <div>
            <div>
              <span>Full Name:</span> Dr Asalu Peter
            </div>
            <div>
              <span>Patient Number:</span>ECHI777
            </div>
            <div>
              <span>Phone Number:</span>090746463778
            </div>
          </div>
          <div>
            <div>
              <span>Birth Date:</span>14-11-3034
            </div>
            <div>
              <span>EHIS Number:</span>EHIS-55665
            </div>
            <div>
              <span>Email:</span>topetemi@gmail.com
            </div>
          </div>
        </div>

        <div>
          <div>Assessment</div>
          <div>
            Mrs Asalu appears in good health with no immediate concerns during
            the examination. Based on the assestment, there are no significant
            issue detected, and vital signs are within normal ranges.
          </div>
        </div>

        <div>
          <div>Diagnosis</div>
          <div>
            Mrs Asalu appears in good health with no immediate concerns during
            the examination. Based on the assestment, there are no significant
            issue detected, and vital signs are within normal ranges.
          </div>
        </div>

        <div>
          <div>Prescription</div>
          <div>
            Mrs Asalu appears in good health with no immediate concerns during
            the examination. Based on the assestment, there are no significant
            issue detected, and vital signs are within normal ranges.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalReport;
