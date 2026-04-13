import Survey from "../components/Survey";
import TableSurvey from "../components/TableSurvey";

function SurveyPage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <TableSurvey />
        </div>

        <div>
          <Survey />
        </div>
      </div>
    </>
  );
}

export default SurveyPage;
