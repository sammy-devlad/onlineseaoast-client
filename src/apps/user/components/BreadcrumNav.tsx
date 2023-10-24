import { IBreadcrumNav } from "@/types";

const BreadcrumNav = ({ pagenavTitle, currentPage }: IBreadcrumNav) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="breadcrumNav border-bottom">
          <div className="d-flex align-items-center justify-content-between mb-4 text-truncate">
            <h4 className="pagenavTitle">{pagenavTitle}</h4>
            <ol className="breadcrumb" style={{ marginBottom: 0 }}>
              <li className="breadcrumb-item text-truncate">
                <a href="/dashboard">Home</a>
              </li>
              <li
                className="breadcrumb-item active text-truncate"
                aria-current="page"
              >
                <span>{currentPage}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumNav;
