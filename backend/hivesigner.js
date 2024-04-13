import hivesigner from "hivesigner";

hive_signer = HiveSigner(private_key)

function transfer(sender, receiver, amount){ 
    tx = hive_signer.transfer(
        sender=sender,
        to=receiver,
        amount=amount,
    )

    broadcast_tx = hive_signer.broadcast(tx)
}

var client = new hivesigner.Client({
    app: 'PeerFund',
    callbackURL: 'https://localhost:5000',
    scope: ['vote', 'comment']
  });
