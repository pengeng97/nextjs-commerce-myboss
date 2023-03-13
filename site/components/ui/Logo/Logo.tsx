const Logo = ({ className = '', ...props }) => (
<svg 
  width="32" 
  height="32" 
  viewBox="0 0 32 32"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  className={className}
  {...props}
  >

   <rect width="100%" height="100%" rx="16" fill="var(--secondary)" />
    <g transform="matrix(1,0,0,1,-210,-210)">
        <g id="Artboard3" transform="matrix(1.00392,0,0,1.00392,270.235,-0.823529)">
            <rect x="-60" y="210" width="510" height="510" style="fill:none;"/>
            <g transform="matrix(0.83839,0,0,0.83839,-141.017,215.89)">
                <circle cx="403.019" cy="290" r="290" style="stroke:black;stroke-width:1.19px;"/>
            </g>
            <g transform="matrix(0.600751,0,0,0.600751,-100.905,281.513)">
                <g transform="matrix(1,0,0,1,54.8268,0.247264)">
                    <path d="M732.569,415.624L724.9,415.624L654.518,225.099L592.998,415.624L584.818,415.624L529.092,235.665C524.093,219.305 520.486,208.426 518.271,203.03C516.055,197.633 513.158,193.657 509.579,191.101C506.001,188.545 500.065,187.096 491.771,186.755L491.771,178.916L578.513,178.916L578.513,186.755C568.06,187.437 561.357,188.942 558.404,191.271C555.45,193.6 553.973,196.867 553.973,201.07C553.973,204.819 556.359,214.419 561.13,229.87L602.371,364.499L662.698,178.916L672.241,178.916L740.067,364.499L775.343,241.8C780.001,225.212 782.33,214.363 782.33,209.25C782.33,194.254 774.32,186.755 758.301,186.755L758.301,178.916L821.355,178.916L821.355,186.755C812.039,187.437 805.109,190.874 800.564,197.065C796.02,203.257 790.283,218.112 783.352,241.629L732.569,415.624Z" style="fill:white;fill-rule:nonzero;"/>
                </g>
                <g transform="matrix(1,0,0,1,-81.578,0)">
                    <path d="M361.895,370.123L446.08,178.916L516.973,178.916L516.973,186.755L508.453,186.755C497.092,186.755 489.65,187.693 486.128,189.567C482.606,191.442 480.249,194.935 479.056,200.048C477.863,205.16 477.267,217.317 477.267,236.517L477.267,349.843C477.267,368.021 477.721,379.922 478.63,385.545C479.539,391.169 481.839,395.344 485.532,398.071C489.224,400.798 496.296,402.161 506.748,402.161L516.973,402.161L516.973,410L406.544,410L406.544,402.161L414.724,402.161C424.494,402.161 431.283,400.911 435.089,398.412C438.895,395.912 441.337,392.021 442.416,386.738C443.496,381.455 444.035,369.157 444.035,349.843L444.035,202.774L352.522,410L344.513,410L252.318,202.774L252.318,338.085C252.318,356.603 252.886,369.214 254.022,375.917C255.158,382.62 258.68,388.499 264.588,393.555C270.495,398.611 278.789,401.479 289.468,402.161L289.468,410L206.817,410L206.817,402.161C216.701,401.593 224.739,398.895 230.93,394.066C237.122,389.238 240.9,383.302 242.263,376.258C243.626,369.214 244.308,356.149 244.308,337.062L244.308,236.517C244.308,218.112 243.768,206.239 242.689,200.9C241.61,195.56 239.338,191.868 235.873,189.823C232.407,187.778 224.824,186.755 213.122,186.755L206.817,186.755L206.817,178.916L277.198,178.916L361.895,370.123Z" style="fill:white;fill-rule:nonzero;"/>
                </g>
                <path d="M521.925,285.596C548.169,287.528 567.653,294.06 580.378,305.194C593.102,316.328 599.464,330.245 599.464,346.946C599.464,361.488 595.147,374.014 586.513,384.523C577.878,395.032 566.83,401.905 553.367,405.143C539.904,408.381 521.868,410 499.26,410L408.599,410L408.599,402.161L417.46,402.161C427.344,402.161 434.189,400.911 437.995,398.412C441.801,395.912 444.215,392.021 445.238,386.738C446.26,381.455 446.772,369.157 446.772,349.843L446.772,237.369C446.772,218.623 446.232,206.524 445.153,201.07C444.073,195.617 441.801,191.868 438.336,189.823C434.871,187.778 427.287,186.755 415.586,186.755L411.155,186.755L411.155,178.916L449.157,177.894L492.443,176.53C555.611,176.53 587.194,194.708 587.194,231.063C587.194,246.06 581.769,258.103 570.92,267.192C560.07,276.28 543.738,282.415 521.925,285.596ZM480.173,282.359C483.013,282.472 485.399,282.529 487.331,282.529C511.87,282.529 528.628,278.666 537.603,270.941C546.579,263.215 551.066,250.718 551.066,233.449C551.066,221.406 549.305,212.09 545.783,205.501C542.261,198.912 536.978,193.828 529.935,190.249C522.891,186.67 510.848,184.881 493.806,184.881C489.376,184.881 484.831,185.051 480.173,185.392L480.173,282.359ZM480.173,290.709L480.173,342.175C480.173,364.101 480.571,378.019 481.366,383.926C482.161,389.834 484.292,394.322 487.757,397.389C491.222,400.457 498.067,401.99 508.292,401.99C526.469,401.99 540.103,397.332 549.192,388.016C558.28,378.7 562.825,364.726 562.825,346.094C562.825,327.007 557.684,312.948 547.402,303.916C537.12,294.884 519.028,290.368 493.125,290.368C489.035,290.368 484.718,290.482 480.173,290.709Z" style="fill:rgb(202,0,0);fill-rule:nonzero;"/>
            </g>
        </g>
    </g>
</svg>
)

export default Logo
