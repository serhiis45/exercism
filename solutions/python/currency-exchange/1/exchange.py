"""Functions for calculating steps in exchaning currency"""



def exchange_money(budget: float, exchange_rate: float) -> float:
    """ calculate exchanged value of the foreign currency """
    return budget / exchange_rate


def get_change(budget: float, exchanging_value: float) -> float:
    """ amount left of your starting currency after exchanging """
    return budget - exchanging_value


def get_value_of_bills(denomination: int, number_of_bills: int) -> float:
    """ calculated value of the bills """
    return denomination * number_of_bills


def get_number_of_bills(amount: float, denomination: int) -> int:
    """number of bills that can be obtained from the amount"""
    return amount // denomination


def get_leftover_of_bills(amount: float, denomination: int) -> float:
    """ the amount that is "leftover", given the current denomination """
    return amount % denomination


def exchangeable_value(budget: float, exchange_rate: float, spread: int, denomination: int) -> int:
    "" "maximum value you can get"""
    spread_rate = exchange_rate * (spread / 100)
    real_exchange_rate = exchange_rate + spread_rate
    budget_after_exchange = exchange_money(budget, real_exchange_rate)
    return budget_after_exchange - (budget_after_exchange % denomination)