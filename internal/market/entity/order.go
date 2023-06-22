package entity

type Order struct {
	ID           string
	Investor     *Investor
	Asset        *Asset
	Shares       int
	PendigShares int
	Price        float64
	OrderType    string
	Status       string
	Transactions []*Transaction
}

func NewOrder(orderID string, investor *Investor, asset *Asset, shares int, pendingShares int, price float64, orderType string) *Order {
	return &Order{
		ID:           orderID,
		Investor:     investor,
		Asset:        asset,
		Shares:       shares,
		PendigShares: shares,
		Price:        price,
		OrderType:    orderType,
		Status:       "OPEN",
		Transactions: []*Transaction{},
	}
}
