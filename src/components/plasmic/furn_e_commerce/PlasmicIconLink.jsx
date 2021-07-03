// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aAVrWby13Whpj9iWc38egj
// Component: -NTaHgkt01icFA
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: aAVrWby13Whpj9iWc38egj/projectcss
import * as sty from "./PlasmicIconLink.module.css"; // plasmic-import: -NTaHgkt01icFA/css

export const PlasmicIconLink__VariantProps = new Array();

export const PlasmicIconLink__ArgProps = new Array("icon", "href");

function PlasmicIconLink__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      href={args.href !== undefined ? args.href : "#"}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <svg
              className={classNames(defaultcss.all, sty.svg__zeQu)}
              role={"img"}
            />
          ),

          value: args.icon,
          className: classNames(sty.slotIcon)
        })}
      </div>
    </a>
  );
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicIconLink__ArgProps,
      internalVariantPropNames: PlasmicIconLink__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicIconLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconLink";
  } else {
    func.displayName = `PlasmicIconLink.${nodeName}`;
  }
  return func;
}

export const PlasmicIconLink = Object.assign(
  // Top-level PlasmicIconLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicIconLink
    internalVariantProps: PlasmicIconLink__VariantProps,
    internalArgProps: PlasmicIconLink__ArgProps
  }
);

export default PlasmicIconLink;
/* prettier-ignore-end */