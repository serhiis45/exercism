"""lasagna module"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time: int) -> int:
    """Return the amount of bake time remaining."""
    return EXPECTED_BAKE_TIME - elapsed_bake_time   
    


# You might also consider using 'PREPARATION_TIME' here, if you have it defined.
def preparation_time_in_minutes(number_of_layers: int) -> int:
    """Calculate the food preparation ime"""
    return number_of_layers * PREPARATION_TIME


def elapsed_time_in_minutes(number_of_layers: int, elapsed_bake_time: int) -> int:
    """Return total elapsed time"""
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time