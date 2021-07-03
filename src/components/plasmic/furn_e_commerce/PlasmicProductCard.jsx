// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aAVrWby13Whpj9iWc38egj
// Component: 404crsqwWn8dHZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Ratings from "../../Ratings"; // plasmic-import: Xd1DQoJebZzcVO/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: aAVrWby13Whpj9iWc38egj/projectcss
import * as sty from "./PlasmicProductCard.module.css"; // plasmic-import: 404crsqwWn8dHZ/css
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: hHGTqrlfVtc0Qd/icon
import HeartOIcon from "./icons/PlasmicIcon__HeartO"; // plasmic-import: MWSBQSHzfeR5Xj/icon
import ExpandIcon from "./icons/PlasmicIcon__Expand"; // plasmic-import: F1Afg6XUxBOMKw/icon
import f1IpHsgvU6AamoWu from "./images/f1.jpeg"; // plasmic-import: ipHsgvU6aamoWu/picture

export const PlasmicProductCard__VariantProps = new Array(
  "withReviews",
  "onSale"
);

export const PlasmicProductCard__ArgProps = new Array(
  "title",
  "price",
  "image",
  "ratings"
);

function PlasmicProductCard__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__onSale]: hasVariant(variants, "onSale", "onSale"),
        [sty.root__withReviews]: hasVariant(
          variants,
          "withReviews",
          "withReviews"
        )
      })}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div className={classNames(defaultcss.all, sty.box__dyiyp)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__kszu0)}
              height={310}
              role={"img"}
              src={f1IpHsgvU6AamoWu}
              width={270}
            />
          ),

          value: args.image
        })}

        {(hasVariant(variants, "onSale", "onSale") ? true : false) ? (
          <div
            className={classNames(defaultcss.all, sty.box___35JmL, {
              [sty.box__onSale___35JmLh0U5H]: hasVariant(
                variants,
                "onSale",
                "onSale"
              )
            })}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__lHAi2
              )}
            >
              {"Sale"}
            </div>
          </div>
        ) : null}
        {(triggers.hover_root ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__i81E)}
          >
            <ShoppingCartIcon
              className={classNames(defaultcss.all, sty.svg__aSvvS)}
              role={"img"}
            />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__vEej4
              )}
            >
              {"Add to cart"}
            </div>

            <HeartOIcon
              className={classNames(defaultcss.all, sty.svg__qXqzc)}
              role={"img"}
            />

            <ExpandIcon
              className={classNames(defaultcss.all, sty.svg__gtXsl)}
              role={"img"}
            />
          </p.Stack>
        ) : null}
      </div>

      {(hasVariant(variants, "withReviews", "withReviews") ? true : false)
        ? p.renderPlasmicSlot({
            defaultContents: (
              <Ratings
                className={classNames("__wab_instance", sty.ratings___7B0MX)}
              />
            ),

            value: args.ratings
          })
        : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__jEyOb)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTitle)
        })}

        {p.renderPlasmicSlot({
          defaultContents: "$100",
          value: args.price,
          className: classNames(sty.slotPrice)
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCard__ArgProps,
      internalVariantPropNames: PlasmicProductCard__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
