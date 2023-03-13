import { useTranslation } from "react-i18next"
import { Page, Card, ChainFilter } from "components/layout"
import { Wrong } from "components/feedback"
import { ExternalLink } from "components/general"
import { useNetworkName } from "data/wallet"

const SwapTx = () => {
  const { t } = useTranslation()
  const networkName = useNetworkName()

  if (networkName !== "mainnet") {
    return (
      <Page title={t("Swap")} small>
        <Card>
          <Wrong>
            {networkName === "classic" ? (
              <p>
                Swaps are not supported for classic, please use the{" "}
                <ExternalLink
                  icon={true}
                  href="https://tfm.com/terraclassic/trade/swap"
                >
                  TFM webapp
                </ExternalLink>{" "}
                instead.
              </p>
            ) : (
              t("Not supported")
            )}
          </Wrong>
        </Card>
      </Page>
    )
  }

  return (
    <Page title={t("Swap")} small>
      <ChainFilter outside>{(chainID) => <div>{chainID}</div>}</ChainFilter>
    </Page>
  )
}

export default SwapTx
