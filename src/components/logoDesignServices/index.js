import React from "react";
import "./index.css";
import logodesignimg from "../../Assets/logodesignimg.png";
const LogoDesignServices = () => {
  return (
    <section className="LogoDesignServices mt-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 ">
            <p className="para">Say No To Logo Template Scams</p>

            <p className="title">
              We Provide What You Can Call Professional Logo Design Services
            </p>

            <p className="para2 mb-2">
              Finding true, professional logo design services might be difficult
              in a world of pre-made templates and quick fixes. We know the
              design industry's template frauds and cookie-cutter techniques at
              Logo Leagues. We guarantee original, bespoke logos that reflect
              your brand's identity. On the surface, template-based logo
              services sound appealing—fast, cheap, and convenient. These
              templates lack originality and fail to capture your brand's
              distinctiveness. Worse, they may be copied, weakening your brand's
              identity.
            </p>

            <p className="para2">
              Our ecommerce logo designer team takes pride in creating custom
              logos from scratch, unlike these template-driven companies. The
              low price logo design services we offer focus on your brand's
              mission, beliefs, and goals. We understand that your logo is a
              visual representation of your brand's story, mission, and
              identity. Collaboration and innovation drive our design approach.
              Instead of recycling designs or taking shortcuts, we explain your
              concept in detail. Our talented designers then create custom logos
              for your brand based on these insights.
            </p>
          </div>

          <div className="col-md-6">
            <img
              className="img-fluid  LogoDesignServicesimg"
              src={logodesignimg}
            />
          </div>

          <div class="col-md-12">
            <p className="para3">
              We deliver a logo that exceeds your expectations. Professional
              logo design services from us elevate your business and make it
              stand out in a congested market. Choose Logo Leagues for a logo
              that tells your brand's story. Let us create a logo that leaves an
              indelible imprint on your audience and distinguishes your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoDesignServices;
