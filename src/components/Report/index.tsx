import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import CardDataReport from "./CardDataReport";
import ReportTable from "./ReportTable";

const Report: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Report sales" />
      <div className="mt-9 grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataReport type="Groupe Wise Analyse" percentage={60} />
        <CardDataReport type="Item Wise Analyse" percentage={80} />
        <CardDataReport type="Client Wise Analyse" percentage={75} />
        <CardDataReport type="Commercial Wise Analyse" percentage={43} />
      </div>
      <div className="mt-9">
        <ReportTable />
      </div>
    </>
  );
};

export default Report;
