// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aAVrWby13Whpj9iWc38egj
// Component: jQAcCX9m0JoW-q
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: aKE0lVaQ0xHkQ_/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: aAVrWby13Whpj9iWc38egj/projectcss
import * as sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: jQAcCX9m0JoW-q/css
import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: keRxNHnvMvUuaS/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: EgpHL2TSRkaKId/icon
import slider1C6CtI0OC21E47J from "./images/slider1.png"; // plasmic-import: C6ctI0oC21E47j/picture
import slider2GHp3Qkr46NskcL from "./images/slider2.png"; // plasmic-import: gHP3qkr46NskcL/picture
import slider3X8MUdGffgBhvQx from "./images/slider3.png"; // plasmic-import: X8MUdGffgBhvQx/picture

export const PlasmicProductCarousel__VariantProps = new Array("slider");

export const PlasmicProductCarousel__ArgProps = new Array();

function PlasmicProductCarousel__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__yaWmx)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__wuspp, {
            [sty.box__slider_second__wuspp5RpcR]: hasVariant(
              variants,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__hKoya
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__tgisj,
              {
                [sty.box__slider_first__tgisjAsa58]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),

                [sty.box__slider_second__tgisj5RpcR]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),

                [sty.box__slider_third__tgisj9IgUk]: hasVariant(
                  variants,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__k4YaK
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.box__ouUxY)}>
            <div className={classNames(defaultcss.all, sty.box__kxPmJ)} />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___1VEle,
                {
                  [sty.box__slider_second___1VEle5RpcR]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.box__slider_third___1VEle9IgUk]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $299.00"
                : hasVariant(variants, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__bKhhy,
                {
                  [sty.box__slider_first__bKhhyAsa58]: hasVariant(
                    variants,
                    "slider",
                    "first"
                  ),

                  [sty.box__slider_second__bKhhy5RpcR]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.box__slider_third__bKhhy9IgUk]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $399.00"
                : hasVariant(variants, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__ynUgy)}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__ekQn)}
              text={"⊕ Add to cart"}
              type={"solidOrange"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton___8Zmxx)}
              text={"More Info"}
              type={"blankOrange"}
            />
          </p.Stack>
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.box__yRmjB)}>
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img, {
              [sty.img__slider_first]: hasVariant(variants, "slider", "first"),
              [sty.img__slider_second]: hasVariant(
                variants,
                "slider",
                "second"
              ),

              [sty.img__slider_third]: hasVariant(variants, "slider", "third")
            })}
            height={
              hasVariant(variants, "slider", "third")
                ? 475
                : hasVariant(variants, "slider", "second")
                ? 559
                : 549
            }
            role={"img"}
            src={
              hasVariant(variants, "slider", "third")
                ? slider3X8MUdGffgBhvQx
                : hasVariant(variants, "slider", "second")
                ? slider2GHp3Qkr46NskcL
                : slider1C6CtI0OC21E47J
            }
            width={
              hasVariant(variants, "slider", "third")
                ? 553
                : hasVariant(variants, "slider", "second")
                ? 528
                : 507
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__ehv7H)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__gU76H, {
            [sty.svg__slider_second__gU76H5RpcR]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svg__slider_third__gU76H9IgUk]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__c8ByC, {
            [sty.svg__slider_first__c8ByCasa58]: hasVariant(
              variants,
              "slider",
              "first"
            ),

            [sty.svg__slider_second__c8ByC5RpcR]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svg__slider_third__c8ByC9IgUk]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__be6Zt, {
            [sty.svg__slider_third__be6Zt9IgUk]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
