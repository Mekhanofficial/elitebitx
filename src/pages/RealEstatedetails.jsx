import React from "react";

const ProjectDetail = ({ project, onClose }) => {
  const projectDetails = {
    1: {
      propertyDescription:
        "Hilton City Line is a dual-branded 329-key hotel asset that operates under The Hilton and Homewood Suites flags. The Sponsor has secured a discounted purchase price with a highly accretive deal structure, acquiring a majority equity interest from the current owner of the Property at an attractive cost basis. Seeking to capitalize on the recovery of the Philadelphia hospitality sector, along with assuming the existing below-market, fixed-rate debt on the Property, the deal presents potentially favorable timing to invest in the rebounding market and asset class. In addition, the potential to sell the Property unencumbered by the franchise agreements, which expire at the end of the target hold period, may provide an opportune exit strategy.",
      whyProperty: [
        "We view the acquisition terms as compelling for this deal – most notably the discounted purchase price that is ~$5M less than competing offers (~$10MM less after taking into account closing costs and capex) and the Property's assumable below market, fixed-rate debt.",
        "We observe a strong positive trend in recent revenue metrics, with net operating income up 10% year-to-date compared to budget projections and tracking well towards the projected 2025 exit NOI, conservatively underwritten at 85% of 2019 (pre-pandemic) numbers.",
        "The hotel will be unencumbered by the current Hilton brand agreement at the end of the 2.25 year target hold period, potentially making it more attractive to buyers.",
      ],
      whySponsor: [
        "We believe DoveHill is a suitable Sponsor for this deal given their singular focus on hospitality (20 portfolio assets).",
        "A family connection to the Seller helped the Sponsor out-position other bidders and secure the Property with attractive terms, including assuming the in-place debt.",
        "Previously headquartered in Philadelphia, the Sponsor has intimate knowledge of the local market and this asset specifically.",
      ],
      type: "Hospitality",
      acres: "1.90",
      strategy: "Growth & Income",
      objective: "Value-add",
      minimum: "$33,000.00",
      roi: "68.7%",
      value: "33000",
      duration: "3 Days",
    },
    2: {
      propertyDescription:
        "Fabian Labs is a two-building, life science campus totaling 24,000 SF located in the heart of Silicon Valley in Palo Alto, 35 miles south of San Francisco, CA. Graymark Capital acquired the Property in 2020 and intends to design and buildout the turnkey lab/office space to meet the needs of life science tenants that are seeking space in the constrained, competitive market of the Bay Area. Proximate to the key components emerging life science companies need – the Bay Area life science venture capital/private equity environment and deep talent pool from top research institutions (Stanford University and University of California Berkeley) – Fabian Labs will be poised to capitalize in the #2 life science market in the country.",
      whyProperty: [],
      whySponsor: [],
      type: "Life Science/Lab",
      acres: "0.7",
      strategy: "Growth & Income",
      objective: "Value-add",
      minimum: "$24,000.00",
      roi: "57%",
      value: "24000",
      duration: "3 Days",
    },
    3: {
      propertyDescription:
        "Go Store It Nashville is a ground-up, self-storage development opportunity presented by Madison Capital Group. The Project is located in Franklin, TN, a rapidly expanding submarket (five-year population growth projection of 9%) located approximately 25 miles south of Nashville. When complete, the Class A property will include 1,286 climate-controlled units and be managed by Go Store It, a wholly-owned subsidiary of Madison Capital.",
      whyProperty: [
        "We believe this deal could be well-positioned to capitalize on the significant population growth in Franklin, TN, as one of the first-to-market self-storage assets in the burgeoning submarket.",
        "Franklin’s multifamily inventory has more than doubled since 2010, a strong potential indication of new, unmet self-storage demand in the submarket.",
        "Only one competitor exists within a 3-mile radius, currently in lease-up, with a rigorous process to secure approvals from the city creating a higher barrier to entry.",
      ],
      whySponsor: [
        "Madison’s in-house management company, Go Store It, with nearly 100 self-storage facilities across the U.S., has deep industry and market knowledge to draw upon to potentially drive revenue and operational efficiency, in our view.",
        "Using their in-house general contractor also generally enables Madison to have more control over timelines and costs.",
        "Madison’s co-investment of 25% is significant compared to the average sponsor’s contribution on the Marketplace and reflects their conviction in the deal.",
      ],
      type: "Self storage",
      acres: "3.02",
      strategy: "Fixed income",
      objective: "Value-add",
      minimum: "$15,000.00",
      roi: "75%",
      value: "15000",
      duration: "3 Days",
    },
    4: {
      propertyDescription:
        "The Mirage is an 816-bed, garden-style student housing asset located in San Marcos, TX, almost halfway between Austin and San Antonio along I-35. San Marcos is home to Texas State University (38,376 enrollment 2022-23), a university with a growing student body that has outpaced its current supply of student housing options, resulting in high occupancy rates and steady rent growth. The Sponsor acquired the asset on May 1st, 2023 and intends to implement a comprehensive value-add renovation strategy on all units, community amenities, and common areas that will position the Property, which sits directly along the campus shuttle route, to capture NOI upside given the excess demand for upgraded, proximate student housing options.",
      whyProperty: [],
      whySponsor: [],
      type: "Student Housing",
      acres: "23.6",
      strategy: "Growth & Income",
      objective: "Value-add",
      minimum: "$32,500.00",
      roi: "84.35%",
      value: "32500",
      duration: "3 Days",
    },
    5: {
      propertyDescription:
        "Palmetto Industrial Park is a newly constructed, three-building industrial property located in Palmetto, FL, approximately 45 miles south of Tampa. Having executed the purchase and sale agreement back in Q2 2022, the Sponsor, Stonemont Financial Group, will acquire the Property upon completion, which is expected to be in Q3 2023. Upon closing, the Sponsor intends to lease up the buildings, which are divisible down to 40,000 SF units to appeal to mid-sized, logistic-focused users in the low vacancy submarket (1.9%), and exit the Project at the end of the 2-year targeted hold period.",
      whyProperty: [
        "We view the acquisition timing of this Project at the completion of construction as potentially advantageous in reducing the uncertainty typically found with labor and material costs for most development deals.",
        "We believe the constrained industrial market and submarket, both currently below 2% vacancy, are a potentially strong indicator of the demand for newly built space.",
        "The Sponsor is already seeing a positive response with pre-leasing efforts, including several requests for proposals (RFPs) in-hand from prospective tenants and even owner/user purchase interest, seeming to support the demand assumptions of the business plan.",
      ],
      whySponsor: [
        "Stonemont Financial Group’s extensive industrial acquisition and development experience (38.7M BSF) makes them well-equipped to execute the intended business plan, in our view.",
        "Stonemont focuses on key industrial markets with supply-demand dislocations, and we believe the high-demand Tampa Bay market fits that strategy well.",
        "Stonemont has been actively involved in the Project throughout the entire development, helping ensure they are in a strong position to execute the lease-up strategy with strong product and a flexible design.",
      ],
      type: "Industrial",
      acres: "38",
      strategy: "Fixed income",
      objective: "High growth",
      minimum: "$25,000.00",
      roi: "78%",
      value: "25000",
      duration: "3 Days",
    },
    6: {
      propertyDescription:
        "Bridge Labs at Pegasus Park will be a redeveloped, state-of-the-art life science asset, located within the dynamic, future-focused campus of Pegasus Park, less than 15 minutes from downtown Dallas, TX. The Sponsor, Montgomery Street Partners, benefits from the strategic partnership with Lyda Hill Philanthropies (“LHP”), whose affiliate is an investor in the campus partnership and will be a limited partner in Bridge Labs at Pegasus Park. The LHP team has extensive life science experience and strong ties to venture capital firms within the North Texas ecosystem. Bridge Labs will be a 135,000 SF purpose-built asset that will be the region’s first institutional-quality, non-incubator space with top-of-the-line infrastructure, amenities, and shared spaces. Situated adjacent to BioLabs, the premier coworking incubator space for life science startups that selected Dallas as its first non-coastal/gateway market, Bridge Labs will seek to capture the outflow of companies seeking more space upon “graduating” from the incubator or fleeing the coastal hubs in search of emerging science ecosystems and more cost-effective lease opportunities. Dallas has been recognized as a top three emerging life science hub and Bridge Labs will seek to take advantage of filling the void of a lack of available space in the fast-growing market.",
      whyProperty: [
        "We believe the burgeoning Dallas life science market is emerging as a leading centrally located life science hub, offering cheaper rents than the coastal markets and an educated workforce stemming from multiple major research universities.",
        "Bridge Labs is uniquely well-positioned, in our view, within thriving Pegasus Park and adjacent to BioLabs, the premier national life science incubator platform.",
        "The strong pre-leasing activity – about 30% of Bridge Labs has already been signed for – gives us conviction in the pent-up demand for modern lab space in Dallas.",
      ],
      whySponsor: [
        "Montgomery Street Partners’ past experience with multiple life science real estate projects prepares them to spearhead this dynamic opportunity, in our view.",
        "The project leadership group – including MSP and J. Small Investments as general partners – will have invested about $21 million in Pegasus Park once Bridge Labs is completed, which reflects their conviction in the project and alignment of interests with investors.",
        "Montgomery Street Partners’ strategic partnership with Lyda Hill Philanthropies (LHP) is a key component to the Project in our view, as LHP has made significant financial investments in Pegasus Park and is actively supporting the campus through strong ties to the local venture capital and life sciences ecosystem.",
      ],
      type: "Life Science - Lab/R&D",
      acres: "2",
      strategy: "Fixed income",
      objective: "Opportunistic",
      minimum: "$12,000.00",
      roi: "85%",
      value: "12000",
      duration: "3 Days",
    },
  };

  const details = projectDetails[project.id];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-slate-800 p-8 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-6">{project.name}</h2>
        <p className="text-gray-400 mb-6 text-lg">{project.profitRate}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              The Property
            </h3>
            <p className="text-gray-400 mb-4">{details.propertyDescription}</p>

            {details.whyProperty.length > 0 && (
              <>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Why This Property:
                </h3>
                <ul className="list-disc list-inside text-gray-400 mb-4">
                  {details.whyProperty.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {details.whySponsor.length > 0 && (
              <>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Why This Sponsor:
                </h3>
                <ul className="list-disc list-inside text-gray-400 mb-4">
                  {details.whySponsor.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Project Breakdown
            </h3>
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-400">Type</p>
                  <p className="text-white">{details.type}</p>
                </div>
                <div>
                  <p className="text-gray-400">ACRES</p>
                  <p className="text-white">{details.acres}</p>
                </div>
                <div>
                  <p className="text-gray-400">STRATEGY</p>
                  <p className="text-white">{details.strategy}</p>
                </div>
                <div>
                  <p className="text-gray-400">OBJECTIVE</p>
                  <p className="text-white">{details.objective}</p>
                </div>
                <div>
                  <p className="text-gray-400">MINIMUM</p>
                  <p className="text-white">{details.minimum}</p>
                </div>
                <div>
                  <p className="text-gray-400">ROI</p>
                  <p className="text-white">{details.roi}</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-4">
              Calculate your ROI
            </h3>
            <p className="text-gray-400 mb-4">
              You could earn up to {details.roi} on {details.minimum}
            </p>
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Value:</p>
                  <p className="text-white">${details.value}</p>
                </div>
                <div>
                  <p className="text-gray-400">Duration (Days):</p>
                  <p className="text-white">{details.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
