import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Button, Spinner } from "@ui-kitten/components";

export const WalletConnection = (props: { style?: ViewStyle }) => {
  // @ts-ignore
  const isPhantomInstalled: boolean = window.solana && window.solana.isPhantom;

  const [loading, setLoading] = React.useState(true);
  const [publicKey, setPublicKey] = React.useState<string>();

  // @ts-ignore
  window.solana.on("disconnect", () => console.log("disconnected!"));

  React.useEffect(() => {
    // Will either automatically connect to Phantom, or do nothing.
    // "Eager Connection"
    // @ts-ignore
    window.solana
      .connect({ onlyIfTrusted: true })
      .then((resp: any) => {
        const pubKey = resp.publicKey.toString();
        if (pubKey) {
          setLoading(false);
          setPublicKey(pubKey);
        } else {
          throw new Error("no pub key returned");
        }
      })
      .catch((err: any) => {
        // Handle connection failure as usual
        console.log("error happened", err);
        setLoading(false);
      });
  }, []);

  const getProvider = () => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    window.open("https://phantom.app/", "_blank");
  };

  const connect = async () => {
    try {
      setLoading(true);
      // @ts-ignore
      const resp = await window.solana.connect();
      const pubKey = resp.publicKey.toString();
      if (pubKey) {
        setLoading(false);
        setPublicKey(pubKey);
      } else {
        throw new Error("no pub key returned");
      }
    } catch (err) {
      setLoading(false);
      console.log("error", err);
      // { code: 4001, message: 'User rejected the request.' }
    }
  };

  const disconnect = async () => {
    try {
      // @ts-ignore
      const resp = await window.solana.disconnect();
      console.log("disconnect response! ", resp);
    } catch (err) {
      console.log("error", err);
      // { code: 4001, message: 'User rejected the request.' }
    }
  };

  const LoadingIndicator = () => (
    <View style={styles.indicator}>
      <Spinner size="small" />
    </View>
  );

  return (
    <Button
      appearance={publicKey ? "outline" : "filled"}
      disabled={loading}
      accessoryLeft={loading ? LoadingIndicator : undefined}
      onPress={connect}
    >
      {publicKey ? "Disconnect" : "Connect Wallet"}
    </Button>
  );
};

const styles = StyleSheet.create({
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
